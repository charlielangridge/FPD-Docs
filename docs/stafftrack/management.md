# Staff Track Management Guide

## Who is this guide for?
Any user that has a job role that is marked as a manager or has been assigned the "Administrator" role.

## Reports
All the reports use the same theme and have similar functionality
#### Sorting
You can use the up-down arrow icon to sort by a column
#### Keyword Search
You can use the search box to search for a keyword in the report
#### Sizing
You can choose from small, normal (default) and large sizes for the report - this adjusts the view to your preference
#### Export
You can export the report to an excel file by clicking the "Export" button

## Users

### User Report
This report shows all the sites users and their profile data. It also shows outstanding tasks and rota overviews.

## Tasks

### Tasks Report
From the task report you are able to see all the tasks that have been assigned to users within your site. You can view the relevant date times and the status of the task.
#### View Task
By clicking the magnifying glass icon you can view the task in more detail. This will open a drawer showing the relevant details of the task.
#### Task Actions
Any actions (such as Verification) will be shown as buttons on the task. You can click these to complete the action.


## Holiday

### Holiday Report
From the holiday report you are able to see all the holiday requests that have been made by users within your site. You can view the relevant date times and the status of the request. You may also approve or reject the request from this report.


## Rota

### Required Dates
You may set required dates for your site. These are dates that you require all staff to be available for. You may set these dates from the "Required Dates" page. You may also delete these dates from the page. To toggle the required date on or off, you double-click the date.

### Time Sheet
The time sheet section of the site is used to record "on the day" data. This is used to record the actual hours worked by staff on a given day. You can also add notes to the time sheet entry. Details about each relevant section are as follows
#### Start & End
These are the times as per the rota for the members of staff
#### Clock In & Clock Out
These are the actual times that the staff member clocked in and out. As a manager you can adjust these times if required. You may choose to use them to extend or reduce hours work "on the day", or to record staff members arriving late or leaving early without permission. 

**You should be consistent with your approach to this**. 

In the reports you can see the original rota times and the adjusted times. Once you have made change, you may save them using the green save button, or revert them with the orange button.
#### Shift User Notes
You may record any notes relevant to the user's shift here. These are the same notes you made when creating or editing the shift. This could also be used to record any issues that occurred during the shift or any other relevant information. Once you have made change, you may save them using the green save button, or revert them with the orange button. **These notes are visible to the user**.

#### Marking as absent 
You may record a staff member as absent using the red X button. This will mark the staff member as absent for the day and will not record any hours worked. You may also record a reason for the absence. If a staff member is marked as absent, you may undo this with the purple restore button.

#### General Day notes
You may record any notes relevant to the day here. This could be used to record any issues that occurred during the day or any other relevant information. Once you have made change, you may save them using the green save button.

#### Payroll Notes
You may record any notes relevant to the payroll for this day here. This could be used to record any pay related notes that occurred during the day or any other relevant information. Once you have made change, you may save them using the green save button.

### Manage Rota

#### Manage Week
From the manage week page you are able to see an overview of your site for the week. To move backwards and forwards weeks you can use the arrows at the top of the page. You can also use URI query `we=YYYY-MM-DD` to link to a specific week based on week ending date.

By clicking on a specific day you can view the day in more detail.

##### Statistics box
The statistics box gives you the following data
- Shift Role Percentage: This is an annotated pie chart showing the split of job roles for the week by cost
- Labour Percentage chart: if there is a forecast or sales total, this char will show you the percentage of sales that the labour cost is per day
- Shift Split Percentage: This shows the split between front of house and back of house roles for the week by cost
- Statistical Values
  - Total Hours: This is the total hours worked for the week
  - Gross Pay: This is the cost of each shift before any deductions or additions
  - NIC: This is the estimated National Insurance Contribution for the week
  - Pension: This is the estimated Pension Contribution for the week
  - Labour Cost: This is the estimated Labour Cost for the week including contributions
  - Sales Total: This is the total sales for the week. The number in brackets is the count of days that have a sales total
  - Labour Percentage: This is the percentage of sales that the labour cost is for the week. The number in brackets is the count of days that have a sales total. Only days with a sales total are included in the calculation

##### Day views
For each day, you are able to see the date, the event(s) scheduled and where applicable, the forecast and sales totals for the site
The chart for each day shows the count of staff at any time per job role. You can identify the job role by the colour (as set by admin) or by hovering over the chart to see the job role name. 

##### Actions

###### Publish Week
Once you have finished adding the shifts for a week you may "Publish" the week. This will notify all staff members of their shifts for the week and make the shifts visible to them. From this point any changes will automatically notify the staff member of the change. You may not publish a week with unassigned shifts

###### Clear Week
If a week is unpublished you may "Clear" the week. This will remove all shifts for the week and reset the week to a blank state. 

###### Save As Template
If you have a week that is a common pattern you may "Save As Template". This will save the week as a template that you can use to quickly populate a week in the future. You can also use the "Apply Template" button to load a template for the week. The template will save the template with a generic name containing the week date, you can edit the name of the template from the "Manage Templates" page.

###### Apply Template
If you have a template saved you may "Apply Template". This will load the template for the week with empty shifts that you can assign to users.

###### Copy Week
You may choose a published week using the selection box and copy the week, including user assignment.

#### Manage Day
From the manage daya page you are able to see the rota for your site for for the specific. To move backwards and forwards weeks you can use the arrows at the top of the page. You can also use URI  `/YYYY-MM-DD` to link to a specific date.

##### Statistics box
The statistics box gives you the following data
- Scheduled Events: This shows the schedule events for the day
- Statistical Values
  - Total Hours: This is the total hours worked for the day
  - Gross Pay: This is the cost of each shift before any deductions or additions
  - NIC: This is the estimated National Insurance Contribution for the day
  - Pension: This is the estimated Pension Contribution for the day
  - Labour Cost: This is the estimated Labour Cost for the day including contributions
  - Sales Total: This is the total sales for the day. The number in brackets is the count of days that have a sales total
  - Cost Per Role: This is the cost of each role for the day
- Shift Role Percentage: This is an annotated pie chart showing the split of job roles for the day by cost

##### Create Shifts
By clicking the "Add Shift" button it will open a drawer with the ability to add a shift for the day. Once you have selected the role, start and end times, the system will present you with availabe users for that role. You can then select the user and add the shift. You may also add notes for the shift. **Notes are visible to the user**.

##### Shifts
The left-hand side of the page shows the shifts for the day. Each shift shows the user, role, start and end times, duration and cost. You can click the three dots on the right hand side to edit or cancel the shift.

###### Edit Shift
By clicking the three dots on the right hand side of the shift, followed by the Edit button, you can edit the shift. This will open a drawer with the ability to edit the shift. You can change the role, start and end times, notes and user. The system will only offer a choice of the users that are available for that role and time.

###### Cancel shift
By clicking the three dots on the right hand side of the shift, followed by the Cancel button, you can cancel the shift. This will remove the shift from the day. You can opt to notify or not notify the user of the cancellation. If a week is published, the user will always be notified of the change.

#### Shift Chart
The right-hand side of the page shows the chart for the day. This shows the count of staff at any time per job role. You can identify the job role by the colour (as set by admin) or by hovering over the chart to see the job role name.

### Manage Templates
This page shows you the shift templates that are available for your site. You can view the shifts in the template, edit the name of the template to something more useful or delete the template.

### Rota Overview Report 

**This report is only available to users with the 'view global reports' permission**

This report shows the labour to sales percentage for each site per day and overall for the week. Percentages below the site target are in green, those above are in red. It also shows rota notes per day per site where available.

### Rota Overview (Non Managerial) Report 

**This report is only available to users with the 'view global reports' permission**

This report shows the non-managerial labour to sales percentage for each site per day and overall for the week. Percentages below the site target are in green, those above are in red. It also shows rota notes per day per site where available.

### Payroll Report
This report shows the payroll details for each user who has had shifts for the specific week. It shows their role, pay rate and hours work - by day and as a total. It also give a calculation of the gross pay. The payroll notes for the week are also shown where available.

### Global Payroll Report

**This report is only available to users with the 'view global reports' permission**

This report shows all users who have had shifts at any site for a specific week. It shows their role, pay rate and total hours worked. It also give a calculation of the gross pay, estimated NIC and Pension. The payroll notes for the week are also shown where available.

### Global Overview Report

**This report is only available to users with the 'view global reports' permission**

This report gives an overview of all sites for the week. It shows Labour vs Sales as a percentage, forecast, sales totals and a forecast vs sales percentage. It also shows the total hours worked, labour gross cost and estimated total labour cost for the week. It also shows notes for the week where available.

## Invites

### Creating an Invite
You may invite a user to a specific role at a site by filling in their name, email address and role. On choosing the role, the system will fill the default hourly pay for that role. You may choose to override this. Once you have created the invite, the user will receive an email with a link to accept the invite. The user will be required to create an account if they do not already have one. If the user already has an account, they will be added to the specific site and role change to their new role.

### Existing invites
Invites expire 7 days after creation. At this point the link within the email will become invalid and notice stating such will be shown if clicked. You may also delete the invite from the system by clicking the trash can button. 

