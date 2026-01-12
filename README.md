# Print Loan Slips Cloudapp
Format and print loan slips from patron workbench.
To use the app to view user loans, select a print profile and print the receipt; it is important that the circulation desk is selected.
For a better result, remove the header and footer print options from the browser's print window and choose 'fit to page width'.

## Configuration
You can create different print profiles or modify the default one.

### General Tab
Select 'Vertical Table' to have headers repeated on separate lines (useful for receipt format on thermal printing);
choose whether to display the row with author information.

### Appearance Tab
The CSS language is used to define the appearance of elements since the receipt to be printed is in HTML format;
to hide an element, simply add `display:none;`.

### Labels Tab
Enter field labels, e.g., your own institution;
For the date format, use strings like `dd/MM/yyyy` or `MM-dd-yyyy` (the format is the one used by DatePipe in Angular).

### Logo Tab
Select and upload an image file of your institution/library system's logo.

### Order Tab
Drag and drop elements to reorder them.
