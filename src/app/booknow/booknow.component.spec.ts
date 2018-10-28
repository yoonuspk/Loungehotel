import { NO_ERRORS_SCHEMA } from "@angular/core";
import { BooknowComponent } from "./booknow.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("BooknowComponent", () => {

  let fixture: ComponentFixture<BooknowComponent>;
  let component: BooknowComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [BooknowComponent]
    });

    fixture = TestBed.createComponent(BooknowComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
