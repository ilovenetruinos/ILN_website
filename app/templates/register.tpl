{config_load file="test.conf" section="setup"}

<!doctype html>
<html>
<head>

    {include file="header.tpl"}

</head>
<body class="default">
    <div id="content">
        <h1>I Love Neutrinos</h1>
        <div id="external">
            <p>
          Fill the following form to do the Pre-registration process in the course.
          Once we received the application, we will study with detail and I will inform about the result.
            </p>
            <form action="" method="post" id="register-form" novalidate="novalidate">
                <fieldset>
                    <div class="form-group">
                        <label for="parentFullName">Parent Fullname:</label>
                        <input type="text" class="form-control" name="parentFullName" id="parentFullName" placeholder="Pepe Perez">
                    </div>
                    <div class="form-group">
                        <label for="parentEmail">Email address:</label>
                        <input type="mail" class="form-control" name="parentEmail"  id="parentEmail" placeholder="pepe@company.com">
                    </div>
                    <div class="form-group">
                        <label for="studentFullName">Student Fullname:</label>
                        <input type="text" class="form-control" name="studentFullName" id="studentFullName" placeholder="Studen's name">
                    </div>
                    <div class="form-group">
                        <a href="/" id="btBack" class="btn btn-default" role="button">Back</a>
                        <button type="submit" id="btSubmit" class="btn btn-default submit">Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>

    {include file="footer.tpl"}
</body>
</html>