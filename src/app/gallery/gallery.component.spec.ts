import { NO_ERRORS_SCHEMA } from "@angular/core";
import { GalleryComponent } from "./gallery.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("GalleryComponent", () => {

  let fixture: ComponentFixture<GalleryComponent>;
  let component: GalleryComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [GalleryComponent]
    });

    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
