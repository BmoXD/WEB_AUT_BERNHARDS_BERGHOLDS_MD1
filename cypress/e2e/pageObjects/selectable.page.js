import { BasePage } from "./base.page";

export class SelectablePage extends BasePage
{
    static get url()
    {
        return "/selectable";
    }

    static get toGridButton()
    {
        return cy.get('[id=demo-tab-grid]');
    }

    static get gridItem()
    {
        return (item) => cy.contains('.list-group-item', item);
    }
    
}