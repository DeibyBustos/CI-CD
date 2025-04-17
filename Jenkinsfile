pipeline {
    agent any

    tools {
        nodejs 'Nodejs18'
    }

    stages {
        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }

        stage('Construir aplicación') {
            steps {
                bat 'npm run build'
            }
        }

        stage('Desplegar en Vercel') {
            steps {
                withCredentials([string(credentialsId: 'vercel_token', variable: 'VERCEL_TOKEN')]) {
                    bat 'npx vercel --token %VERCEL_TOKEN% --prod --yes'
                }
            }
        }
    }
}
