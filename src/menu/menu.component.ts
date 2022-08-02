import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  pdfData: any;
  location: any;
  topics: string[] = [
    'GIT',
    'Github Commands',
    'ANT',
    'ANT and Gradle',
    'Joins',
  ].sort();

  

  selectedPdf() {
    switch (this.pdfData) {
      case "GIT":
        window.open('../../assets/Github.pdf', '_blank');
        break;
      case "GCP":
        window.open('../../assets/GCP Framework.pdf', '_blank');
        break;
      case "PCF":
        window.open('../../assets/PCF.pdf', '_blank');
        break;
      case "ANT":
        window.open('../../assets/ANT Build.pdf', '_blank');
        break;
      case "Kubernates":
        window.open('../../assets/Kubernetes1.pdf', '_blank');
        break;
      case "Openshift":
        window.open('../../assets/OPENSHIFT.pdf', '_blank');
        break;
      case "Rally":
        window.open('../../assets/RALLY.pdf', '_blank');
        break;
      case "Tekton pipeline":
        window.open('../../assets/Tekton Pipeline.pdf', '_blank');
        break;
      case "Tekton":
        window.open('../../assets/TekTon.pdf', '_blank');
        break;
      case "Github Commands":
        window.open('../../assets/github command.pdf', '_blank');
        break;
      case "Google Cloud Platform":
        window.open('../../assets/Google Cloud Platform.pdf', '_blank');
        break;
      case "ANT and Gradle":
        window.open('../../assets/Ant and gradle document.pdf', '_blank');
        break;
      case "Joins":
        window.open('../../assets/JOINS.pdf', '_blank');
        break;
    }

    console.log(this.pdfData)
  }

}

