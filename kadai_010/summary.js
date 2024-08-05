$(function(){
// 1ボタンがクリックされた場合
 $('#change-color').on('click',function(){
  // 文字色を変える
  $('#target').css('color','red');
 });
// 2ボタンがクリックされた場合
 $('#change-text').on('click',function(){
//  文字内容が変わる
  $('#target').text('Hello!');
 });
// 3ボタンがクリックされた場合
 $('#fade-out').on('click',function(){
//  フェードアウトで文字が消える
  $('#target').fadeOut();
 });
// 4ボタンがクリックされた場合
 $('#fade-in').on('click',function(){

  $('#target').fadeIn();
 });
});