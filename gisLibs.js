// This is a library for standard gis-coop object creation

function WorkOrderObject(){
  // set vars
    this.existing = [];
    this.add = [];
    this.dateCreated = new Date();
    this.gisObjectType = 'Workorder';
    this.comments = [];
    this.stakers = [];
  //functions
    // add user comments to workorder
      this.addComment = function(comments,user){
        if(typeof(comments) == 'string'){
            var commentDate = new Date();
            var commentObj = {
              comment:comments,
              user:user,
              date:commentDate
            }
            this.comments.push(commentObj);
        }else{
          throw "Error adding comment to Workorder";
        }
        return this;
      }
    // add stakers to workorder
      this.addStaker = function(staker){
        if(typeof(staker) == 'string'){
          this.stakers.push(staker);
        }else{
          throw "Error adding staker to Workorder";
        }
        return this;
      }
    // add new features to work order
    this.addNewFeature = function(f){
      this.add.push(f);
    }

  return this;
}
