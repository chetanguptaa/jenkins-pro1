pipeline {
  agent {
    docker-agent-alpine
  }

  triggers {
    pollSCM '* * * * *'
  }
  stages {
    stage('Build') {
      steps {
        echo "building..."
      }
    }
    stage('Test') {
      steps {
        echo "Testing..."
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