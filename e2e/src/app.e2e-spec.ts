import {GridPage} from './app.po';

describe('workspace-project App', () => {
  let gridPage: GridPage;

  beforeEach(() => {
    gridPage = new GridPage();
  });

  it('should navigate grid page', () => {
    gridPage.navigateTo();
    expect(gridPage.gridIsDisplayed()).toBe(true);
  });

  it('should select all rows', () => {
    gridPage.waitLoaded();
    gridPage.clickToggleButton();
    gridPage.clickHeaderCheckboxButton();
    gridPage.getCheckedRows().each(row => {
      expect(row.getAttribute('class')).not.toContain('ag-hidden');
    });
    expect(gridPage.getCheckedRows().count()).toBeGreaterThan(1);
  });

  it('get rows from panel', () => {
    expect(gridPage.getTotalRowsCountFromPanel()).toBeGreaterThan(0);
  });

  it('should uncheck header checkbox on deselect row', () => {
    expect(gridPage.getHeaderCheckboxChecked()).toBe(true);
    gridPage.deSelectRowByIndex(0);
    expect(gridPage.getHeaderCheckboxChecked()).toBe(false);
  });

  it('should uncheck all rows by unchecking header checkbox', () => {
    gridPage.getHeaderCheckboxChecked()
      .then(checked => {
        if (checked) {
          gridPage.clickHeaderCheckboxButton();
        } else { // deselect all rows by double click
          gridPage.clickHeaderCheckboxButton();
          gridPage.clickHeaderCheckboxButton();
        }
      })
      .then(() => {
        gridPage.getCheckedRows().each(row => {
          expect(row.getAttribute('class')).toContain('ag-hidden');
        });
        expect(gridPage.getHeaderCheckboxChecked()).toBe(false);
      });
  });

  it('should hide selection column', () => {
    gridPage.clickToggleButton();
    expect(gridPage.getHeaderCheckboxVisible()).toBe(false);
  });


});
