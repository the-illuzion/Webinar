import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MadburyService } from '../services/madbury.service';

declare var $: any;
@Component({
  selector: 'app-seminar-page',
  templateUrl: './seminar-page.component.html',
  styleUrls: ['./seminar-page.component.css']
})
export class SeminarPageComponent implements OnInit {

  public videourl=undefined
  constructor(private seminarservice:MadburyService) { }

  ngOnInit(): void {


    this.getid();

    if ($(window).width() < 950) {

      $(".sp_bt").click(function () {
        $("#main").addClass('hmkhb');
        $("#main").removeClass('ddlg');
        $('.content').addClass("hid");
        $('#speaker_prof').removeClass("hid");
        $('.poll_part').hide();
      });

      $(".poll_bt").click(function () {
        $("#main").addClass('hmkhb');
        $("#main").removeClass('ddlg');
        $('.content').addClass("hid");
        $('#poll').removeClass("hid");
        $("#q1").show();
      });

      $(".chat_bt").click(function () {
        $("#main").addClass('hmkhb');
        $("#main").removeClass('ddlg');
        $('.content').addClass("hid");
        $('#chat').removeClass("hid");
        $('.poll_part').hide();
      });

      $(".faq_bt").click(function () {

        $('.content').addClass("hid");
        $('#QA').removeClass("hid");
        $('.poll_part').hide();
      });

      $(".briefcase_bt").click(function () {
        $("#main").addClass('hmkhb');
        $("#main").removeClass('ddlg');
        $('.content').addClass("hid");

        $('#briefcase').removeClass("hid");

        $('.poll_part').hide();
      });

      $('.closebtn').click(function () {
        $("#main").addClass('ddlg');
        $("#main").removeClass('hmkhb');
        $('.content').addClass("hid");
        $('.poll_part').hide();

      });

      $("#qpoll #finishpoll").click(function () {
        $("#main").addClass('ddlg');
        $("#main").removeClass('hmkhb');
        $('.content').addClass('hid');
        $('.poll_part').hide();

      });


    }



    else {
      $(".sp_bt").click(function () {
        $(".navigation div").addClass('zoom');
        $(".navigation div").removeClass('img_clicked');
        $(".sp_bt").removeClass('zoom');
        $(".sp_bt").addClass('img_clicked');
        $('.poll_part').hide();
        $('.content').addClass("hid");
        $('#speaker_prof').removeClass("hid");

      });

      $(".poll_bt").click(function () {
        $(".navigation div").addClass('zoom');
        $(".navigation div").removeClass('img_clicked');
        $(".poll_bt").removeClass('zoom');
        $(".poll_bt").addClass('img_clicked');
        $('.content').addClass("hid");
        $('#poll').removeClass("hid");
        $("#q1").show();
      });

      $(".chat_bt").click(function () {
        $(".navigation div").addClass('zoom');
        $(".navigation div").removeClass('img_clicked');
        $(".chat_bt").removeClass('zoom');
        $(".chat_bt").addClass('img_clicked');
        $('.poll_part').hide();
        $('.content').addClass("hid");
        $('#chat').removeClass("hid");
      });

      $(".faq_bt").click(function () {
        $(".navigation div").addClass('zoom');
        $(".navigation div").removeClass('img_clicked');
        $(".faq_bt").removeClass('zoom');
        $(".faq_bt").addClass('img_clicked');
        $('.poll_part').hide();
        $('.content').addClass("hid");
        $('#QA').removeClass("hid");
      });

      $(".briefcase_bt").click(function () {
        $(".navigation div").addClass('zoom');
        $(".navigation div").removeClass('img_clicked');
        $(".briefcase_bt").removeClass('zoom');
        $(".briefcase_bt").addClass('img_clicked');
        $('.content').addClass("hid");
        $('#briefcase').removeClass("hid");

      });


      $('.closebtn').click(function () {
        $(".navigation div").addClass('zoom');
        $(".navigation div").removeClass('img_clicked');
        $('.poll_part').hide();
        $('.content').addClass("hid");
      });
    }
    $("#q2").hide();
    $("#q3").hide();
    $("#qpoll").hide();
    $("#q1 input").click(function () {
      $("#q1").hide();
      $("#q2").show(300);
    });
    $("#q2 input").click(function () {
      $("#q2").hide();
      $("#q3").show(300);
    });
    $("#q3 input").click(function () {
      $("#q3").hide();
      $('#qpoll').show();

    });
    $("#qpoll #finishpoll").click(function () {
      $("#qpoll").hide();
      $('.content').addClass('hid');
      $(".navigation div").removeClass('img_clicked');
      $(".navigation div").addClass('zoom');

    });

    $("#qpoll #retakepoll").click(function () {
      $("#qpoll").hide();
      $('#q1').show();
    });

    $(".navigation .faq_bt").click(function () {
      $("#a_form").toggle();
      $(".navigation").hide();
    });

  }


  getid() {
    this.seminarservice.getid().then(s => {
      console.log(s)
      this.videourl = "https://www.youtube.com/embed/" + s['result'][0].youtubeid
      console.log(this.videourl)
      $("#iframediv").append(`<iframe src="` + this.videourl + `" width="100%" height="100%" frameborder="0"
      allowfullscreen allow="autoplay; encrypted-media" style="background: black;"></iframe>`)
    })
  }

}