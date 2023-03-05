pipeline {
  agent {
    docker {
      image 'node:6-alpine'
    }
  }

  triggers {
    pollSCM '* * * * *'
  }
  stages {
    stage('Build') {
      steps {
        echo "npm install"
      }
    }
    stage('Test') {
      steps {
        echo "node app.js"
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