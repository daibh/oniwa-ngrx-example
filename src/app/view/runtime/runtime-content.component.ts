import { CommonModule } from '@angular/common';
import { Compiler, Component, ComponentFactory, ComponentFactoryResolver, ComponentRef, ModuleWithComponentFactories, NgModule, ViewChild, ViewContainerRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@Component({
    selector: 'runtime-content',
    template: `
        <div>
            <h3>Template</h3>
            <div>
                <div class="form-group">
                    <label for="obj">Input object argument:</label>
                    <textarea id="tmp" rows="5" class="form-control" [(ngModel)]="obj"></textarea>
                </div>
                <button (click)="makeObject()">Make object</button>
            </div>
            <div *ngIf="objModel">
                <div class="form-group"  *ngFor="let item of getModelProperties()">
                    <label for="obj">Input {{item}}:</label>
                    <input id="tmp" class="form-control" [(ngModel)]="objModel[item]" />
                </div>
            </div>
            <div>
                <div class="form-group">
                    <label for="tmp">Template:</label>
                    <textarea id="tmp" rows="5" class="form-control" [(ngModel)]="template"></textarea>
                </div>
                <button (click)="compileTemplate()">Compile</button>
            </div>
            <h3>Output</h3>
            <div #container></div>
        </div>
    `
})
export class RuntimeContentComponent {

    template: string = '<div>\nHello, {{name}}\n</div>';
    obj: string = '{}';
    objModel: any;

    @ViewChild('container', { read: ViewContainerRef })
    container: ViewContainerRef;

    private componentRef: ComponentRef<{}>;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private compiler: Compiler) {
    }

    makeObject() {
        this.objModel = JSON.parse(this.obj);
    }

    getModelProperties = () => {
        if (this.objModel) {
            return Object.keys(this.objModel);
        }
        return [];
    }

    compileTemplate() {

        let metadata = {
            selector: `runtime-component-sample`,
            template: this.template
        };

        let factory = this.createComponentFactorySync(this.compiler, metadata, null);

        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
        this.componentRef = this.container.createComponent(factory);
    }

    private createComponentFactorySync(compiler: Compiler, metadata: Component, componentClass: any): ComponentFactory<any> {
        const objArgument = Object.assign({}, this.objModel);
        const cmpClass = componentClass || class RuntimeComponent { arg = objArgument };
        const decoratedCmp = Component(metadata)(cmpClass);

        @NgModule({ imports: [BrowserModule, CommonModule], declarations: [decoratedCmp] })
        class RuntimeComponentModule { }

        let module: ModuleWithComponentFactories<any> = compiler.compileModuleAndAllComponentsSync(RuntimeComponentModule);
        return module.componentFactories.find(f => f.componentType === decoratedCmp);
    }

}