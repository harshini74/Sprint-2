Feature: FreeCRM launching

 


Background: FreeCRM 
Given User loads the browser 
When User Navigates to Login Page
Then  Login Page is displayed

 

      
   Scenario Outline: Successful Login
    Given User is in the Login Page of website
    When Enter valid email id <email>
    And Enter valid password <pwd>
    And Click the Login button
    Then Print Login successful
  
   Examples: 
      | email | pwd |
      | harshini.ghanta@gmail.com| Freecrm1 |

 

  Scenario Outline: Unsuccessful Login
    Given User is in the Login Page of website
    When Enter invalid email id <email>
    And Enter invalid password<pwd>
     And Click the Login button
    Then Print Login Unsuccessful

 

    Examples: 
      | email | pwd |
      | 12ab@gmail.com | abcde |
      |    |   |
    
   
    
    Scenario Outline: Addition of Contact
    Given User is in the Account Home Page
    When Clicks on Contact
    And Click on New button to add new contact
    And Enter first name <fname>
    And Enter last name <lname>
    And Click the Save button
    Then New Contact is created
  
  Examples:
 
      | fname | lname |
      | AAA | BBB |
      
      Scenario Outline: Addition of Contact invalid
    Given User is in the Account Home Page
    When Clicks on Contact
    And Click on New button to add new contact
    And Enter null first name <fname>
    And Enter null last name <lname>
    And Click the Save button
    Then New Contact is not created
  
  Examples:
 
      | fname | lname |
      |  |  |
  
  
    
    Scenario Outline: Addition of Deal
    Given User is in the Account Home Page
    When Clicks on Deals
    And Click on New button to add new deal
    And Enter deal title <dtitle>
    And Click the Save button
    Then New Deal is created
    
     Examples:
 
      | dtitle | 
      | Onine Booking |
      
      Scenario Outline: Addition of Deal invalid
    Given User is in the Account Home Page
    When Clicks on Deals
    And Click on New button to add new deal
    And Enter null deal title <dtitle>
    And Click the Save button
    Then New Deal is not created
    
     Examples:
 
      | dtitle | 
      |  |
    
    
    Scenario Outline: Addition of Task
    Given User is in the Account Home Page
    When Clicks on Tasks
    And Click on New button to add new task
    And Enter task title <ttitle>
    And Enter due date <ddate>
    And Click the Save button
    Then New Task is created
    
     Examples:
 
      | ttitle | ddate |
      | Start planning | 30/11/2020 17:30 |
      
      Scenario Outline: Addition of Task invalid
    Given User is in the Account Home Page
    When Clicks on Tasks
    And Click on New button to add new task
    And Enter null task title <ttitle>
    And Enter null due date <ddate>
    And Click the Save button
    Then New Task is not created
    
     Examples:
 
      | ttitle | ddate |
      |  |  |
         
    Scenario: Verification of Calendar
    Given User is in the Account Home Page
    When Clicks on Calendar
    And Verify the dates
    Then Added successfully and can be viewed