pipeline {
    agent any

    stages {
//         stage('Pre-Build Setup') {
//             steps {
//                 sh 'cp /home/waleeddevops/client-nginx.conf .'
//                 sh 'cp /home/waleeddevops/docker-compose-front-test.yaml ./docker-compose.yaml'
//                 sh 'cat docker-compose.yaml'
//                 sh 'mv Dockerfile.prod Dockerfile'
//             }
//         }
//         stage('Build') {
//             steps {
//                 sh 'docker-compose up -d --build'
//             }
//         }
//         stage('Post-Build Cleanup #1') {
//             steps {
//                 sh 'yes y | docker system prune'
//             }
//         }
        stage('E2E Test') {
            agent {
                docker {
                    image 'cypress/base:latest'
                }
            }
            steps {
                sh 'whoami'
                sh 'pwd'
                sh 'ls /home/'
                sh 'cp -r /home/waleeddevops/Front_Test ./'
                sh 'cd Front_Test/'
                sh 'npm ci'
                sh 'npx cypress run --spec "cypress/e2e/Sign-Up/CheckEmail.cy.js"'
            }
        }
//         stage('Post-Test Cleanup') {
//             steps {
//                 sh 'docker-compose down --rmi -f docker-compose-front-test.yaml'
//                 sh 'yes y | docker system prune'
//             }
//         }
//         stage('Build for Deploy') {
//             steps {
//                 sh 'docker-compose up -d --build'
//             }
//         }
//         stage('Post-Build Cleanup #2') {
//             steps {
//                 sh 'yes y | docker system prune'
//             }
//         }
    }
}
