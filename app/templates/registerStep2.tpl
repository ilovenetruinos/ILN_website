{extends file='mainPageTemplate.tpl'}
{block name="workingArea"}
    <p class="bg-success alert"><span class="glyphicon glyphicon-ok"></span>&nbsp;<strong>Congratulations!</strong><br/>You have just been Pre registered in the course.</p>

    {* TODO: Research in a better way to show results.*}
    <form action="step2.php" method="post" id="register-form" novalidate="novalidate">
        <fieldset>
            <div class="form-group">
                <label for="parentFullName">Parent Fullname:</label>
                {$parentFullName}
            </div>
            <div class="form-group">
                <label for="parentEmail">Email address:</label>
                {$parentEmail}
            </div>
            <div class="form-group">
                <label for="studentFullName">Student Fullname:</label>
                {$studentFullName}
            </div>
            <div class="form-group">
                <label for="studentAge">Student age:</label>
                {$studentAge}
            </div>
            <div class="form-group">
                <a href="/" id="btBack" class="btn btn-info" role="button">Back</a>
            </div>
        </fieldset>
    </form>
{/block}