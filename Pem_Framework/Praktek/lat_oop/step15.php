<?php
class person {
    var $name;
    public $height;
    protected $social_insurance;
    private $pinn_number;

    // ini merupakan fungsi construct
    function __construct($persons_name) {
        $this->name = $persons_name;
    }
    
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