<template><div><h1 id="staff-track-admin-guide" tabindex="-1"><a class="header-anchor" href="#staff-track-admin-guide"><span>Staff Track Admin Guide</span></a></h1>
<h2 id="admin-access" tabindex="-1"><a class="header-anchor" href="#admin-access"><span>Admin Access</span></a></h2>
<p>In order to get access to the admin panel, you will need to be granted the permission by the site administrator. You can also gain the permission by being assigned a role that has the permission, such as 'Administrator'. Once you have been granted access, you can log in by going to the admin panel at <code v-pre>/admin</code>.</p>
<h2 id="audit-trail" tabindex="-1"><a class="header-anchor" href="#audit-trail"><span>Audit Trail</span></a></h2>
<p>All elements of the site have Audit logs that record all actions taken on the site. This includes changes to staff, sites, roles, tasks and more. You can view the audit logs by viewing the individual models.</p>
<h2 id="soft-delete" tabindex="-1"><a class="header-anchor" href="#soft-delete"><span>Soft Delete</span></a></h2>
<p>Several of the models are &quot;soft delete&quot; models. Once deleted, these can still be viewed and restored within the admin area. Using the Filter button on a model, you can choose to view only the deleted items. You can also restore these items if required.</p>
<h2 id="system-admin" tabindex="-1"><a class="header-anchor" href="#system-admin"><span>System Admin</span></a></h2>
<h3 id="manage-rota" tabindex="-1"><a class="header-anchor" href="#manage-rota"><span>Manage Rota</span></a></h3>
<p>Using the page accessible at System Admin &gt; Manage Rota you are able to set key settings for the system.</p>
<ul>
<li>FY Start: This where you define the start month and day of your financial year.</li>
<li>NI / Pension details: These are used for the calculation of estimates of net estimates.</li>
<li>Day Start Hour: This is the hour that the business day starts. This is used for display purposes.</li>
<li>Chart Y Size: This is the height of table cells in rem and is used for display purposes.</li>
</ul>
<h3 id="job-role-setup" tabindex="-1"><a class="header-anchor" href="#job-role-setup"><span>Job Role Setup</span></a></h3>
<p>Job roles are universal, but can be assigned to specific sites. You can add or edit job roles from the System Admin &gt; Job Roles page within the admin area.</p>
<h4 id="adding-a-new-job-role" tabindex="-1"><a class="header-anchor" href="#adding-a-new-job-role"><span>Adding a new job role</span></a></h4>
<p>To create a new job role, within the admin area, choose System Admin &gt; Job Role and click the &quot;New Job Role&quot; button. Fill in the required fields and click &quot;Create&quot;.</p>
<ul>
<li>Colour: This is used to help identify the job role at various points.</li>
<li>Is Manager: This is used to identify if the job role is a manager role. This will grant user with the role management permissions for the site.</li>
<li>Back of House: This is used to identify if the job role is a back or front of house role. This is used for reporting purposes.</li>
<li>Can Undertake: This is used to identify the tasks that the job role can undertake. Generally you would set these as lower level roles. For example a &quot;General Manager&quot; would be able to undertake rota positions as &quot;Bar Staff&quot; but not the the reverse.</li>
</ul>
<p>Once you have created the job role, you will need to add the job roles that are used at the site.</p>
<h4 id="editing-a-job-role" tabindex="-1"><a class="header-anchor" href="#editing-a-job-role"><span>Editing a job role</span></a></h4>
<p>You can edit a existing site from the System Admin &gt; Sites page within the admin area. With the tabs at the bottom of the page you can update the following.</p>
<ul>
<li>Tasks: You can add tasks specific to the job role which will be allocated when staff are invited to the site</li>
<li>Sites: You can assign the job role to specific sites, with the default pay rate for that site.</li>
</ul>
<h3 id="site-setup" tabindex="-1"><a class="header-anchor" href="#site-setup"><span>Site Setup</span></a></h3>
<p>Sites can be added or edited and will need to be set up before you can start tracking staff.</p>
<h4 id="adding-a-new-site" tabindex="-1"><a class="header-anchor" href="#adding-a-new-site"><span>Adding a new site</span></a></h4>
<p>To create a new site, within the admin area, choose System Admin &gt; Sites and click the &quot;New Site&quot; button. Fill in the required fields and click &quot;Create&quot;.</p>
<ul>
<li>Colour: This is used to help identify the site at various points.</li>
<li>Labour % Target: This is used for reporting purposes and is the target percentage of sales that should be spent on labour.</li>
<li>Event Data Feeds: These are used to import data from external sources. Please contact technical support to get these.</li>
</ul>
<p>Once you have created the site, you will need to add the job roles that are used at the site.</p>
<h4 id="editing-a-site" tabindex="-1"><a class="header-anchor" href="#editing-a-site"><span>Editing a site</span></a></h4>
<p>You can edit a existing site from the System Admin &gt; Sites page within the admin area. With the tabs at the bottom of the page you can update the following.</p>
<ul>
<li>Job Roles: You should add the job roles that are used at the site, with their default pay rates.</li>
<li>Tasks: You can add tasks specific to the site which will be allocated when staff are invited to the site</li>
<li>Users: You can view the users that are attached to the site, their roles and pay rates.</li>
</ul>
<h3 id="temp-uploads" tabindex="-1"><a class="header-anchor" href="#temp-uploads"><span>Temp Uploads</span></a></h3>
<p>This is used to manage temporary uploads. Items within this area are automatically deleted after use or expire after an hour.</p>
<h2 id="model-administration" tabindex="-1"><a class="header-anchor" href="#model-administration"><span>Model Administration</span></a></h2>
<p>All models are available (within allowed permission) within the admin area. You can view, edit, delete and restore items as required.</p>
<p><strong>It should be noted that irreversible changes can be made within the admin area and suitable care should be taken</strong>0</p>
<h3 id="adding-a-new-task" tabindex="-1"><a class="header-anchor" href="#adding-a-new-task"><span>Adding a new task</span></a></h3>
<p>To create a new tasks, within the admin area, choose System Admin &gt; Tasks &gt; Tasks and click the &quot;New Task&quot; button. Fill in the required fields and click &quot;Create&quot;.</p>
<ul>
<li>Type: There are four types of task
<ul>
<li>File Upload: Require a file to be uploaded
<ul>
<li>You must give the task file a unique identifier - this can be done within the &quot;File Upload&quot; box</li>
<li>You can require verification but it is not required</li>
</ul>
</li>
<li>Verification: A manager of the site is required to verify the task completion, so can be used for offline tasks such as &quot;Completed Induction&quot;</li>
<li>Profile Completion: This is used to ensure that the user has completed their profile.
<ul>
<li>You can require verification but it is not required. If &quot;Requires Verification&quot; is not checked, the task will be automatically marked as complete when the user completes their profile.</li>
</ul>
</li>
<li>Document Signature: This ties into the signable system - please see the specific area for these details.</li>
</ul>
</li>
<li>Required For All: This setting will apply this task to all users, irrespective of their job role or site.</li>
<li>Requires Verification: This setting will require a manager to verify the task completion.</li>
<li>Required for Rota: This setting will require the task to be completed before the user can be added to the rota.</li>
</ul>
<h3 id="site-user-tasks" tabindex="-1"><a class="header-anchor" href="#site-user-tasks"><span>Site User Tasks</span></a></h3>
<p>These models, as named, control the tasks that are assigned to users at a site level. You can add specific tasks to a user at a site level from this model area.</p>
<h3 id="other-areas-of-note" tabindex="-1"><a class="header-anchor" href="#other-areas-of-note"><span>Other Areas of note</span></a></h3>
<ul>
<li>Roles &amp; Permissions: This is where you can assign ACL roles to users and set the permissions that they have.</li>
</ul>
<h2 id="signable-setup" tabindex="-1"><a class="header-anchor" href="#signable-setup"><span>Signable Setup</span></a></h2>
<p>Signable is used to manage documents that require a signature. Within the admin area under Tasks you can see the Signable Templates. These are your templates as setup directly on <a href="https://signable.app/" target="_blank" rel="noopener noreferrer">Signable</a>. These are assigned to &quot;Document Signature&quot; tasks within the &quot;Document Signing&quot; box.  You can also see Signable Envelopes. These are the envelopes that have been sent to users for signing. You can see the status of these envelopes and &quot;nudge&quot; (resend) them if required.</p>
<p><strong>Setup of Signable templates is done within <a href="https://signable.app/" target="_blank" rel="noopener noreferrer">Signable</a> - please see their <a href="https://help.signable.app/" target="_blank" rel="noopener noreferrer">documentation</a> for more information.</strong></p>
</div></template>


