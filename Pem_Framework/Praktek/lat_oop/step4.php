<?php
class person {
    var $name;

    // ini merupakan fungsi setter
    function set_name($new_name) {
        $this->name = $new_name;
    }

    // ini merupakan fungsi getter
    function get_name() {
        return $this->name;
    }
}
?>