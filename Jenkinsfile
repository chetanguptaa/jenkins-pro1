pipeline {
  agent {
    node {
      label 'docker-agent-alpine'
    }
  }
  triggers {
    pollSCM '* * * * *'
  }
  stages {
    stage('Build') {
      steps {
        echo "building..."
        sh '''
        npm install
        '''
      }
    }
    stage('Test') {
      steps {
        echo "Testing..."
        sh '''
        node app.js
        '''
      }
    }
    stage('Deliver') {
      steps {
        echo 'Deliver...'
        sh '''
        echo "doing delivery..."
        '''
      }
    }
  }
}