import { NO_ERRORS_SCHEMA } from "@angular/core";
import { BooklistComponent } from "./booklist.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("BooklistComponent", () => {

  let fixture: ComponentFixture<BooklistComponent>;
  let component: BooklistComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [BooklistComponent]
    });

    fixture = TestBed.createComponent(BooklistComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
