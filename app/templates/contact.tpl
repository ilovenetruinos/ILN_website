{extends file='mainPageTemplate.tpl'}
{block name="workingArea"}
    <p>
    Fill the following form to do the Pre-registration process in the course.
    Once we received the application, we will study with detail and I will inform about the result.
    </p>
    <form action="contactStep2.php" method="post" id="contact-form" novalidate="novalidate">
        <fieldset>
            <div class="form-group">
                <label for="fullName" class="hideAural">Parent Fullname:</label>
                <input type="text" class="form-control" name="fullName" id="fullName" placeholder="Fullname: Pepe Perez" />
            </div>
            <div class="form-group">
                <label for="email" class="hideAural">Email address:</label>
                {* 
                <div class="input-group">
                    <div class="input-group-addon">@</div>
                </div>
                *}
               <input type="mail" class="form-control" name="email"  id="email" placeholder="Email: pepe@company.com" />
            </div>
            <div class="form-group">
                <label for="subject" class="hideAural">Subject:</label>
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject: Course Doubt" />
            </div>
            <div class="form-group">
                <label for="contentArea" class="hideAural">Content:</label>
				<textarea class="form-control" name="contentArea" id="contentArea" rows="3"></textarea>
            </div>
            <div class="form-group">
                <a href="/" id="btBack" class="btn btn-info" role="button">Back</a>
                <button type="submit" id="btSubmit" class="btn btn-success submit">Submit</button>
            </div>
        </fieldset>
    </form>
{/block}