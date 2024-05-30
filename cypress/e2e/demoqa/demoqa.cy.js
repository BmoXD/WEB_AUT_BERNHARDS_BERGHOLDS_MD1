import { SelectablePage } from "../pageObjects/selectable.page";

describe("Demoqa", () => {
    context("Selectable Grid", () => 
    {

        beforeEach(() =>
        {
            SelectablePage.visit();
        });

        it("Select and validate grid items", () =>
        {
            // Click the "Grid" tab
            SelectablePage.toGridButton.click();
            
            // Define the items to be clicked and validated
            const itemsToClick = ['Two', 'Four', 'Six', 'Eight'];
            const itemsNotToClick = ['One', 'Three', 'Five', 'Seven', 'Nine'];
            
            // Click the items "Two", "Four", "Six", "Eight"
            itemsToClick.forEach(item =>
            {
                SelectablePage.gridItem(item).click();
            });
            
            // Validate that "Two", "Four", "Six", "Eight" are highlighted
            itemsToClick.forEach(item =>
            {
                SelectablePage.gridItem(item).should('have.class', 'active');
            });

            // Validate that "One", "Three", "Five", "Seven", "Nine" are not highlighted
            itemsNotToClick.forEach(item =>
            {
                SelectablePage.gridItem(item).should('not.have.class', 'active');
            });
        });
    });
});
