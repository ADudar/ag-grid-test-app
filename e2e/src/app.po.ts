import {browser, by, element, protractor} from 'protractor';

export class GridPage {
  EC = protractor.ExpectedConditions;
  toggleButton = element(by.buttonText('Toggle selection mode'));
  headerCheckbox = element(by.css('app-header-checkbox-selection .ag-icon'));
  loader = element(by.css('.ag-overlay-loading-center'));
  grid = element(by.css('app-grid'));
  checkedRows = element.all(by.css('.ag-icon-checkbox-checked'));
  totalRowsPanel = element(by.css('app-records-count .ag-name-value-value'));
  selectedRowsPanel = element(by.css('app-selected-records-count .ag-name-value-value'));

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  clickToggleButton() {
    return this.toggleButton.click();
  }

  clickHeaderCheckboxButton() {
    return this.headerCheckbox.click();
  }

  waitLoaded() {
    return browser.wait(this.EC.invisibilityOf(this.loader), 15000);
  }

  gridIsDisplayed() {
    return this.grid.isDisplayed();
  }

  getCheckedRows() {
    return this.checkedRows;
  }

  getHeaderCheckboxChecked() {
    return this.headerCheckbox.getAttribute('class')
      .then((classList => classList.includes('ag-icon-checkbox-checked')));
  }

  getHeaderCheckboxVisible() {
    return this.headerCheckbox.isPresent();
  }

  deSelectRowByIndex(index: number) {
    const rowSelector = `.ag-center-cols-container [row-index="${index}"]`;
    const visibleCheckboxSelector = '.ag-icon:not(.ag-hidden)';
    const visibleCheckbox = element(by.css(rowSelector)).$(visibleCheckboxSelector);
    visibleCheckbox.getAttribute('class')
      .then(classList => classList.includes('ag-icon-checkbox-checked'))
      .then(selected => {
        if (selected) {
          visibleCheckbox.click();
        }
      });
  }

  getTotalRowsCountFromPanel() {
    return this.totalRowsPanel.getText();
  }
}
