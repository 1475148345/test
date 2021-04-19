pipeline {
  agent any
  stages {
    stage('检出') {
      steps {
        checkout([$class: 'GitSCM',
        branches: [[name: env.GIT_BUILD_REF]],
        userRemoteConfigs: [[
          url: env.GIT_REPO_URL,
          credentialsId: env.CREDENTIALS_ID
        ]]])
      }
    }
    stage('安装依赖') {
      steps {
        sh 'cnpm install'
      }
    }
    stage('编译') {
      steps {
        sh 'npm run build'
      }
    }
    stage('上传到 COS Bucket') {
      steps {
        sh "coscmd config -a ${env.COS_SECRET_ID} -s ${env.COS_SECRET_KEY} -b ${env.COS_BUCKET_NAME} -r ${env.COS_BUCKET_REGION}"
        sh 'coscmd upload -r ./dist/ /'
        echo '''上传成功，访问 https://${env.COS_BUCKET_NAME}.cos-website.${env.COS_BUCKET_REGION}.myqcloud.com 预览效果
您也可以访问原域名 https://${env.COS_BUCKET_NAME}.cos.${env.COS_BUCKET_REGION}.myqcloud.com/index.html 预览效果'''
      }
    }
  }
}