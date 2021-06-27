import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { EditableImageComponent } from "./editable-image/editable-image.component";
import { ImageUploadModule } from "../image-upload/image-upload.module";

@NgModule({
  declarations: [EditableImageComponent],
  exports: [EditableImageComponent],
  imports: [CommonModule, FormsModule, ImageUploadModule],
})
export class EditableModule {}
