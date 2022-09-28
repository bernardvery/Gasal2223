<?php
// explicitly adding class properties are optional - but is good 
// practice

class person {
    var $name;

    // ini merupakan fungsi construct
    function __construct($persons_name) {
        $this->name = $persons_name;
    }

    // ini merupakan fungsi getter
    function get_name() {
        return $this->name;
    }

    // protected methods and properties restrict access to those
    // elements
    protected function set_name($new_name) {
        if ($this->name != "Jimmy Two Guns") {
            $this->name = strtoupper($new_name);
        }
    }
}

// 'extends' is the keyword that enables inheritance!
class employee extends person {

    protected function set_name($new_name) {
        if ($new_name == "Stefan Lamp") {
            $this->name = $new_name;
        }else if($new_name == "Johnny Fingers") {
            person::set_name($new_name);
        }
    }

    function __construct($employee_name) {
        $this->set_name($employee_name);
    }
}
?>