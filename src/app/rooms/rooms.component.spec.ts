import { NO_ERRORS_SCHEMA } from "@angular/core";
import { RoomsComponent } from "./rooms.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("RoomsComponent", () => {

  let fixture: ComponentFixture<RoomsComponent>;
  let component: RoomsComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [RoomsComponent]
    });

    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
