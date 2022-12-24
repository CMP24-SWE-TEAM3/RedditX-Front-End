pipeline {
    agent any

    stages {
        stage('Pre-Build Setup') {
            steps {
                sh 'cp /home/waleeddevops/client-nginx.conf .'
                sh 'mv docker-compose-test.yaml ./docker-compose.yaml'
                sh 'mv Dockerfile.prod Dockerfile'
            }
        }
        stage('Build for Test') {
            steps {
                sh 'docker-compose up -d --build'
            }
        }
        stage('Post-Build Cleanup #1') {
            steps {
                sh 'yes y | docker system prune'
            }
        }
        stage('E2E Test') {
            steps {
                try {
                    sh 'cp -r /home/waleeddevops/Front_Test ./'
                    dir('Front_Test') {
                        sh 'npm install'
                        sh './node_modules/.bin/cypress install --force'
                        sh 'npx cypress run --spec "cypress/e2e/Sign-Up/CheckEmail.cy.js"'
                    }
                } catch (err) {
                    echo "Test Failed"
                    //  Post build cleanup
                    sh 'docker-compose down --rmi'
                    sh 'yes y | docker system prune'
                    exit 42
                }
            }
        }
        stage('Post-Test Cleanup') {
            steps {
                sh 'docker-compose down --rmi'
                sh 'yes y | docker system prune'
            }
        }
        stage('Build for Deploy') {
            steps {
                sh 'mv docker-compose-deploy.yaml ./docker-compose.yaml'
                sh 'docker-compose up -d --build'
            }
        }
        stage('Post-Build Cleanup #2') {
            steps {
                sh 'yes y | docker system prune'
            }
        }
    }
}
