import {browser, by, element, protractor} from 'protractor';

/**
 * Grid page object
 */
export class GridPage {
  EC = protractor.ExpectedConditions;
  toggleButton = element(by.buttonText('Toggle selection mode'));
  headerCheckbox = element(by.css('app-header-checkbox-selection .ag-icon'));
  loader = element(by.css('.ag-overlay-loading-center'));
  grid = element(by.css('app-grid'));
  checkedRows = element.all(by.css('.ag-icon-checkbox-checked'));
  totalRowsPanel = element(by.css('app-records-count .ag-name-value-value'));
  selectedRowsPanel = element(by.css('app-selected-records-count .ag-name-value-value'));

  /**
   * Navigate to url
   */
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  /**
   * Show or hide selection column
   */
  clickToggleButton() {
    return this.toggleButton.click();
  }

  /**
   * Check or uncheck all rows
   */
  clickHeaderCheckboxButton() {
    return this.headerCheckbox.click();
  }

  /**
   * Wait data appears
   */
  waitLoaded() {
    return browser.wait(this.EC.invisibilityOf(this.loader), 15000);
  }

  /**
   * Grid exists on page and it visible
   */
  gridIsDisplayed() {
    return this.grid.isDisplayed();
  }

  /**
   * Return checked rows
   */
  getCheckedRows() {
    return this.checkedRows;
  }

  /**
   * Get state of header checkbox
   */
  getHeaderCheckboxChecked() {
    return this.headerCheckbox.getAttribute('class')
      .then((classList => classList.includes('ag-icon-checkbox-checked')));
  }

  /**
   * Get visibility of header checkbox
   */
  getHeaderCheckboxVisible() {
    return this.headerCheckbox.isPresent();
  }

  /**
   * unselect row by index
   * @param index
   */
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

  /**
   * Get total rows from panel
   */
  getTotalRowsCountFromPanel() {
    return this.totalRowsPanel.getText();
  }
}
