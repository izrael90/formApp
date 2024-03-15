import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dynamic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear Solid', Validators.required],
      ['The Witcher 3', Validators.required],
      ['The Last of Us', Validators.required],
    ]),
  });

  constructor(private fb: FormBuilder) {}
  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray;
  }
  onSubmit(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();

      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
