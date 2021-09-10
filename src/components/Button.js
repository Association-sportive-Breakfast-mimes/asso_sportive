import React, {useState} from 'react';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, ResourcesDirective, ResourceDirective } from '@syncfusion/ej2-react-schedule';

const Button = () => {
   const localData = [
       {
           Id:1,
           Subject: 'Skartting',
           StartTime: new Date(2019, 0, 11, 6, 30),
           EndTime: new Date(2019, 0, 11, 4, 0),
           RessourceID:1,
           IsAllDay: true,
        },
        {
            Id:2,
            Subject: 'SWIMMING',
            StartTime: new Date(2021, 5, 9, 7, 30),
            EndTime: new Date(2021, 5, 9, 8, 30),
            RessourceID:2
        },
        {
            Id:3,
            Subject: 'Skartt',
            StartTime: new Date(2021, 5, 10, 9, 0),
            EndTime: new Date(2021, 5, 10, 10, 0),
            RessourceID:3
        },
    ];
    const ressourceDataSource = [
        {Name: 'John', Id:1, Color: '#ea7a57'},
        {Name: 'JSteve', Id:2, Color: '#e357CD2'},
        {Name: 'James', Id:3, Color: '#7fa900'}
    ];
    return (
        <div>
            <ScheduleComponent SalectedDate = {new Date(2019, 0, 11)}  eventSettings = {localData}>
                <Inject services= {[Day, Week, WorkWeek, Month, Agenda]}></Inject>
            </ScheduleComponent>
            <ResourcesDirective>
                <ResourceDirective field = "RessourcesID" title = "Ressource Name" Name= "Ressources" 
                textField='Name' idField='Id' colorField = 'Color' DataSource =  {ressourceDataSource}></ResourceDirective>
            </ResourcesDirective>
        </div>
    );
};

export default Button;