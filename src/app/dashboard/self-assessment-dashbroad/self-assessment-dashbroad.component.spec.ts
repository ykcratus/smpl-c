import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SelfAssessmentDashbroadComponent } from "./self-assessment-dashbroad.component";

describe("UserRegisterComponent", () => {
  let component: SelfAssessmentDashbroadComponent;
  let fixture: ComponentFixture<SelfAssessmentDashbroadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelfAssessmentDashbroadComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfAssessmentDashbroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
