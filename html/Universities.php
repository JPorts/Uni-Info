<?php 
  include '../php/getUniList.php'
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" type="text/css" href="../css/navbar.css">
  <link rel="stylesheet" type="text/css" href="../css/main.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

  <title>Uni info</title>
</head>

<body>
  <!-- Basic Navigation bar-->
  <div class="nav">
    <div class="nav-header">
      <div class="nav-title">
        Uni-Info
      </div>
    </div>
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    <input type="checkbox" id="nav-check">
    <div class="nav-links">
      <a href="index.html" target="">Home</a>
      <a href="subjectAreas.html" target="">Subject Areas</a>
      <a href="jobInformation.html" target="">Job Information</a>
    </div>
  </div>

  <!--University List-->
  <div class="container">
    <section id="university-list">
      <p>
        Here is a list of links to tertiary education institutions operating in the United Kingdom.
      </p>
    </section>

    <section id=universities>
      <!-- Fill University list with URLs-->
      <div id="uni-lookup">
     
      </div>
    </section>

  </div>

  <footer>
    <p> Uni-Info 2018 &copy; </p>
  </footer>


  <script src="../js/main.js"></script>
  <script>
     var unis = <?php echo UniApi() ?>;
    </script>
</body>

</html>