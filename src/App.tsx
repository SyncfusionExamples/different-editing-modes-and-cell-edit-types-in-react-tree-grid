import React from 'react';
import { TreeGridComponent, ColumnsDirective, ColumnDirective,
         Inject, Page, Edit, EditSettingsModel, Toolbar, CommandColumn } from '@syncfusion/ej2-react-treegrid';
import { summaryData } from './datasource';
import './App.css';

function App() {
  const editOptions: EditSettingsModel = {allowAdding: true, allowEditing: true, allowDeleting: true,
                                          mode:"Row"};
  const toolbarSettings: any = ["Add", "Edit", "Delete", "Update", "Cancel"];
  const dateTimeParams: object = {params: { format:"M/d/y hh:mm a"}};
  const commands: any = [
    {
      buttonOption: { cssClass: 'e-flat', iconCss: 'e-edit e-icons' },
      type: 'Edit',
    },
    {
      buttonOption: { cssClass: 'e-flat', iconCss: 'e-delete e-icons' },
      type: 'Delete'
    },
    {
      buttonOption: { cssClass: 'e-flat', iconCss: 'e-update e-icons' },
      type: 'Save'
    },
    {
      buttonOption: { cssClass: 'e-flat', iconCss: 'e-cancel-icon e-icons' },
      type: 'Cancel'
    }
  ]
  return (
    <TreeGridComponent dataSource={summaryData}
                       childMapping="subtasks"
                       treeColumnIndex={1}
                       editSettings={editOptions}
                       toolbar={toolbarSettings}
                       allowPaging={true}>
      <Inject services={[Page, Edit, Toolbar, CommandColumn]} />                   
      <ColumnsDirective>
        <ColumnDirective field="taskID" headerText="Task ID" 
        width='90' textAlign="Right" isPrimaryKey={true}>
        </ColumnDirective>
        <ColumnDirective field="taskName" headerText="Task Name">
        </ColumnDirective>
        <ColumnDirective field="startDate" headerText="Start Date" 
        format='yMd' editType="datepickeredit" edit={dateTimeParams}>
        </ColumnDirective>
        <ColumnDirective field="duration" headerText="Duration">
        </ColumnDirective>
        <ColumnDirective field="priority" headerText="Priority"
                         editType="dropdownedit">
        </ColumnDirective>
        <ColumnDirective field="approved" headerText="Approved"
                         editType="booleanedit">
        </ColumnDirective>
        <ColumnDirective headerText="Manage Records" width="140"
                         commands={commands}></ColumnDirective>
      </ColumnsDirective>
    </TreeGridComponent>
  );
}

export default App;
