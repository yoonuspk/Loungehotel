import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ContactusComponent } from "./contactus.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("ContactusComponent", () => {

  let fixture: ComponentFixture<ContactusComponent>;
  let component: ContactusComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [ContactusComponent]
    });

    fixture = TestBed.createComponent(ContactusComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
