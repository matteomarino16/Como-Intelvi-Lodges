import os
import glob

def rename_images(directory, prefix="image"):
    # Get all files including .jpg and .JPG
    files = sorted(glob.glob(os.path.join(directory, "*.[jJ][pP][gG]")))
    
    # Check if 1.jpg exists, if so, keep it as first or skip
    # For cadelrestel, 1.jpg is missing, so we need to create it.
    # For terrazzasuimonti, 1.jpg exists.
    
    counter = 1
    
    # Special handling to preserve existing 1.jpg if it's not in the "new" set
    # But here the user said "updated folders", so maybe we should just re-index everything?
    # If 1.jpg exists, let's call it temp_1.jpg to avoid overwrite issues, then rename back.
    
    existing_ones = [f for f in files if os.path.basename(f) == "1.jpg"]
    
    if directory == "cadelrestel":
        # No 1.jpg seen in LS, so just rename all sequentially
        pass
    elif directory == "terrazzasuimonti":
        # 1.jpg exists. Let's keep it as 1.jpg and rename others starting from 2
        # Remove 1.jpg from the list to process
        files = [f for f in files if os.path.basename(f) != "1.jpg"]
        counter = 2
        
    for file_path in files:
        # Skip if already named correctly (e.g. 2.jpg) to avoid double rename issues if run twice
        filename = os.path.basename(file_path)
        if filename.isdigit() and filename.endswith(".jpg"):
             continue # Already simple number
             
        new_name = f"{counter}.jpg"
        new_path = os.path.join(directory, new_name)
        
        # Ensure we don't overwrite an existing file that hasn't been processed
        while os.path.exists(new_path) and new_path not in files:
            counter += 1
            new_name = f"{counter}.jpg"
            new_path = os.path.join(directory, new_name)
            
        os.rename(file_path, new_path)
        print(f"Renamed {filename} to {new_name}")
        counter += 1

print("Processing cadelrestel...")
rename_images("cadelrestel")

print("Processing terrazzasuimonti...")
rename_images("terrazzasuimonti")
