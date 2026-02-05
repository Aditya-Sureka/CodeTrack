const fs = require("fs/promises");
const path = require("path");
const { s3, S3_BUCKET } = require("../config/aws-config");

async function pullRepo() {
  const repoPath = path.resolve(process.cwd(), ".apnagit");
  const commitsPath = path.join(repoPath, "commits");

  try {
    const data = await s3
      .listObjectsV2({ Bucket: S3_BUCKET, Prefix: "commits/" })
      .promise();

    const objects = data.Contents || [];

    for (const obj of objects) {
      const key = obj.Key;

      const commitDir = path.join(
        commitsPath,
        path.dirname(key).split("/").pop()
      );

      await fs.mkdir(commitDir, { recursive: true });

      const params = {
        Bucket: S3_BUCKET,
        Key: key,
      };

      const fileContent = await s3.getObject(params).promise();

      const localFilePath = path.join(repoPath, key);
      await fs.mkdir(path.dirname(localFilePath), { recursive: true });
      await fs.writeFile(localFilePath, fileContent.Body);

      console.log(`Pulled ${key} from S3.`);
    }
  } catch (err) {
    console.log("Unable to pull : ", err);
  }
}

module.exports = { pullRepo };
