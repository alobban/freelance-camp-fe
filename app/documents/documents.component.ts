import { Component } from '@angular/core';
import { Document } from './Document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
	documents: Document[] = [
		{
			title: "My First Doc",
			description: "This is a sample doc",
			file_url: "http://google.com",
			updated_at: "11/11/16",
			image_url: "http://google.com",
		},
		{
			title: "My Second Doc",
			description: "This is a sample doc",
			file_url: "http://google.com",
			updated_at: "11/11/16",
			image_url: "http://google.com",
		},
		{
			title: "My Last Doc",
			description: "This is a sample doc",
			file_url: "http://google.com",
			updated_at: "11/11/16",
			image_url: "http://google.com",
		}
	]
}