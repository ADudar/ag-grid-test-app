import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {SearchListService} from './search-list.service';


describe('SearchListService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: SearchListService = TestBed.get(SearchListService);
    expect(service).toBeTruthy();
  });
});
