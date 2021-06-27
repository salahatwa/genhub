import { Component } from "@angular/core";
import { EditableComponent } from "../editable.component";

@Component({
  selector: "app-editable-image",
  templateUrl: "./editable-image.component.html",
  styleUrls: ["./editable-image.component.scss"],
})
export class EditableImageComponent extends EditableComponent {
  onImageLoad() {
    this.isActiveInput = true;
  }

  onImageUpload(id: string) {
    this.entityValue = id;
    this.updateEntity();
  }
}
