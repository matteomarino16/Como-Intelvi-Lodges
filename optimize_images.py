import os
from PIL import Image

def optimize_images(directory):
    # Get all files in the directory
    files = [f for f in os.listdir(directory) if f.lower().endswith(('.jpg', '.jpeg', '.png'))]
    
    # Sort files to ensure deterministic renaming (optional, but good for consistency)
    # We want to keep 1.jpg as is (or re-optimize it), and rename the rest
    files.sort()
    
    # Separate 1.jpg if it exists
    if '1.jpg' in files:
        files.remove('1.jpg')
        # We might want to optimize 1.jpg too, but let's keep its name
        try:
            with Image.open(os.path.join(directory, '1.jpg')) as img:
                img = img.convert('RGB')
                img.thumbnail((1600, 1600)) # Resize max dimension to 1600px
                img.save(os.path.join(directory, '1.jpg'), "JPEG", quality=80, optimize=True)
                print("Optimized 1.jpg")
        except Exception as e:
            print(f"Error optimizing 1.jpg: {e}")

    # Process the rest
    counter = 2
    for filename in files:
        if filename == '1.jpg': continue # Should not happen due to remove
        
        old_path = os.path.join(directory, filename)
        new_filename = f"{counter}.jpg"
        new_path = os.path.join(directory, new_filename)
        
        # Check if target filename already exists and is not the current file
        # If 2.jpg exists (from previous run or manual), we might overwrite or skip.
        # Let's assume we want to overwrite/rename.
        
        try:
            with Image.open(old_path) as img:
                img = img.convert('RGB') # Ensure RGB for JPEG
                img.thumbnail((1600, 1600)) # Resize
                
                # Save to new path (if it's the same, it overwrites)
                # If we are renaming "genazzini..." to "2.jpg", we save as "2.jpg" then delete "genazzini..."
                # But "save" creates a new file.
                
                img.save(new_path, "JPEG", quality=80, optimize=True)
                print(f"Processed {filename} -> {new_filename}")
                
            # If the filename was different, remove the old one
            if filename != new_filename:
                os.remove(old_path)
                
            counter += 1
            
        except Exception as e:
            print(f"Error processing {filename}: {e}")

if __name__ == "__main__":
    directory = "terrazzalagolezzeno"
    if os.path.exists(directory):
        optimize_images(directory)
    else:
        print(f"Directory {directory} not found.")
