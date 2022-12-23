pipeline {
    agent any

    stages {
        stage('Pre-Build Setup') {
            steps {
                sh 'cp /home/waleeddevops/client-nginx.conf .'
                sh 'mv Dockerfile.prod Dockerfile'
            }
        }
        stage('Build') {
            steps {
                sh 'docker-compose up -d --build'
            }
        }
        stage('Post-Build Cleanup') {
            steps {
                sh 'yes y | docker system prune'
            }
        }
    }
}
