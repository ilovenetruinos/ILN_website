{extends file='mainPageTemplate.tpl'}
{block name="workingArea"}
    <p>
    Fill the following form to do the Pre-registration process in the course.
    Once we received the application, we will study with detail and I will inform about the result.
    </p>
    <form action="registerStep2.php" method="post" id="register-form" novalidate="novalidate">
        <fieldset>
            <div class="form-group">
                <label for="parentFullName" class="hideAural">Parent Fullname:</label>
                <input type="text" class="form-control" name="parentFullName" id="parentFullName" placeholder="Parent's fullname: Pepe Perez" />
            </div>
            <div class="form-group">
                <label for="parentEmail" class="hideAural">Email address:</label>
                {* 
                <div class="input-group">
                    <div class="input-group-addon">@</div>
                </div>
                *}
               <input type="mail" class="form-control" name="parentEmail"  id="parentEmail" placeholder="Email: pepe@company.com" />
            </div>
            <div class="form-group">
                <label for="studentFullName" class="hideAural">Student Fullname:</label>
                <input type="text" class="form-control" name="studentFullName" id="studentFullName" placeholder="Student's fullname: Pepito" />
            </div>
            <div class="form-group">
                <label for="studentAge" class="hideAural">Student age:</label>
                <select name="studentAge" id="studentAge" class="form-control">
                    <option value="">Student's age</option>
                    {html_options values=$ageValues output=$ageValues}
                </select>
            </div>



            <div class="form-group">
                <a href="/" id="btBack" class="btn btn-info" role="button">Back</a>
                <button type="submit" id="btSubmit" class="btn btn-success submit">Submit</button>
            </div>
        </fieldset>
    </form>
{/block}