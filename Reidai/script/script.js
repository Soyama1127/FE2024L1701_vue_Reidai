// JavaScript用ファイル
new Vue({
    el: '#app',
    
    data() {
      return {
        pass: '',
        repass: '',
        error_msg: false
      };
    },
    computed: {
      // 入力されている、且つパスワードが一致しているかを確認する算出プロパティ
      // 入力されているかは、this.･･･ で判定可能
      // 例）一致TRUE（パスワード：aaaa、パスワード確認：aaaa）
      // 例）不一致FALSE（パスワード：aaaa、パスワード確認：aaab）
      // ボタンをTRUEなら登録を表示orFALSEなら使用不可を表示にする算出プロパティ
      passCheck() {
        if(this.pass === this.repass && this.pass.length > 0 && this.repass.length > 0){
          this.error_msg = false;
          return true;
        }else if(this.pass === this.repass){
          this.error_msg = false;
          return false;
        }else{
          this.error_msg = true;
          return false;
        }
      },
    }
  });