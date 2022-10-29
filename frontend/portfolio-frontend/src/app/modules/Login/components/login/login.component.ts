import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  response_from_backend:any
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    let response=this.http.get(environment.url+'first')
    console.log(response)
    response.subscribe(data=>{
      this.response_from_backend=data
    })
    console.log(this.response_from_backend)
  }

}
