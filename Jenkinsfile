pipeline {
    
    agent any

    triggers {

        pollSCM '* * * * *'
   
    }

    stages {

        stage('Build') {

            steps {

                echo "building the application..."
            
            }
        
        }

        stage('Test') {
            
            steps {
                
                echo "deploying the application..."
            
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