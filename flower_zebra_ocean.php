<?php //A Community Service Project to Spread Positivity and Compassion

//Defining variables 
$kindness_actions = array('compliment a stranger', 'give up your seat on the bus', 'say thank you to those around you', 'treat someone to lunch', 'volunteer an hour of your time', 'leave positive notes for others to find'); 

//Create an introduction 
echo "Welcome to our community service project! Our goal is to spread positivity and compassion throughout our community by encouraging people to perform random acts of kindness. Here are some ideas you can start with: \n";

//Loop through all of the kindness actions we've defined in our array
foreach($kindness_actions as $action){
  echo "- $action \n";
}

//Let the user know that their small actions can make a big difference 
echo "\nYour small actions can make a big difference in someone’s life. So go out and spread kindness and positivity! \n";

//Create a web form to submit more ideas 
echo "\nKnow of any other ideas for spreading kindness in the community? We'd love to hear about them! Please fill out the form below to submit your ideas: \n\n";

//Define form elements 
echo '<form action="kindness_form.php" method="post">';
echo '<p>Name: <input type="text" name="name" /></p>';
echo '<p>Idea: <input type="text" name="idea" /></p>';
echo '<input type="submit" />';
echo '</form>';

echo "\nThanks for your contribution! Together, we can make the world a better, kinder place.\n";

?>