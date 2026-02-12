import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildMfeComponent } from './childmfe.component';
describe('ChildMfeComponent', () => {
    let component: ChildMfeComponent;
    let fixture: ComponentFixture<ChildMfeComponent>;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ChildMfeComponent]
        })
            .compileComponents();
    });
    beforeEach(() => {
        fixture = TestBed.createComponent(ChildMfeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
