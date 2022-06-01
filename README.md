# UNIT5_C2

<ul>
<li>Create a react application for finding houses on rent</li>
<li>use mock json server to store the data of houses on rent</li>
<li>every house has following information:
<ul>
<li>Name</li>
<li>Owners name</li>
<li>Address</li>
<li>Area code</li>
<li>rent</li>
<li>preferred tenants: bachelors or married</li>
<li>optionally Image of the house (fetch from anywhere), for bonus point.</li>
</ul>
</li>
<li>When user lands on the page, show them every house information in a table</li>
<li>create buttons for sorting the table data, 2 for each (asc and desc)</li>
<li>table has following columns sortable:
<ul>
<li>area code</li>
<li>rent</li>
</ul>
</li>
<li>there should be an input box that will filter the table by address match.</li>
<li>Whenever a user changes these columns, filter and sort these tables properly.</li>
<li>DO NOT make network request to filter and sort, it will happen on in-memory array state.</li>
<li>at the top of the table there’s a button to toggle between save house form</li>
<li>use a boolean state to toggle between table and form, default table will be shown</li>
<li>use form to create a new entry to store house, form will have all above entries (preferred tenants are two checkboxes, rest are input boxes only, address can be textarea)</li>
<li>use your local json server on PORT: 8080. Make sure to follow this carefully. (<a href="http://localhost:8080/houses">http://localhost:8080/houses</a>)  anything else will not pass the test cases</li>
</ul>
