#pragma strict
var speed : float;
var countText : GUIText;
var winText : GUIText;
private var count : int;

function Start() {
	count = 0;
	SetCountText();
	winText.text = "";
}

function FixedUpdate () {

	var moveHorizontal : float = Input.GetAxis("Horizontal");
	var moveVertical : float = Input.GetAxis("Vertical");
	
	var movement : Vector3 = new Vector3(moveHorizontal, 0.0f, moveVertical);
	rigidbody.AddForce(movement * speed *Time.deltaTime);
}

function OnTriggerEnter (other : Collider) {
	if(other.gameObject.tag == "PickUp") {
		other.gameObject.SetActive(false);
		count += 1;
		SetCountText();
	};
}

function SetCountText() {
	countText.text = "Count: " + count;
	if(count >= 12) {
		winText.text = "YOU WIN!!!!!";
	}
}